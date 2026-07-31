import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, type = "community", customFields = {} } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Valid email address is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.KLAVIYO_PRIVATE_API_KEY;
    const betaListId = process.env.KLAVIYO_BETA_LIST_ID;
    const communityListId = process.env.KLAVIYO_COMMUNITY_LIST_ID;

    const listId = type === "beta" ? betaListId : communityListId;

    if (!apiKey || !listId) {
      return NextResponse.json({
        success: true,
        simulated: true,
        message: `Subscription simulated for ${email}.`,
      });
    }

    // 1. Update/Create Klaviyo Profile with First Name, Last Name, Ordered Items, and Total Quantity
    try {
      await fetch(`https://a.klaviyo.com/api/profiles/`, {
        method: "POST",
        headers: {
          Authorization: `Klaviyo-API-Key ${apiKey}`,
          accept: "application/json",
          "content-type": "application/json",
          revision: "2024-02-15",
        },
        body: JSON.stringify({
          data: {
            type: "profile",
            attributes: {
              email: email,
              first_name: customFields.first_name || "",
              last_name: customFields.last_name || "",
              properties: {
                order_source: customFields.order_source || "MANI Website",
                order_total: customFields.order_total || 119.99,
                items_purchased: customFields.items_purchased || "Bye Bye Narcissist Collection",
                items_count: customFields.items_count || 1,
                shipping_address: customFields.shipping_address || "",
                signup_date: new Date().toISOString(),
                ...customFields,
              },
            },
          },
        }),
      });
    } catch (profileErr) {
      console.warn("[KLAVIYO PROFILE SYNC NOTICE]", profileErr);
    }

    // 2. Subscribe Profile to Klaviyo List (Beta or Community)
    const klaviyoResponse = await fetch(
      `https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/`,
      {
        method: "POST",
        headers: {
          Authorization: `Klaviyo-API-Key ${apiKey}`,
          accept: "application/json",
          "content-type": "application/json",
          revision: "2024-02-15",
        },
        body: JSON.stringify({
          data: {
            type: "profile-subscription-bulk-create-job",
            attributes: {
              profiles: {
                data: [
                  {
                    type: "profile",
                    attributes: {
                      email: email,
                      subscriptions: {
                        email: {
                          marketing: {
                            consent: "SUBSCRIBED",
                          },
                        },
                      },
                    },
                  },
                ],
              },
            },
            relationships: {
              list: {
                data: {
                  type: "list",
                  id: listId,
                },
              },
            },
          },
        }),
      }
    );

    // 3. If type === "order", track official Klaviyo "Placed Order" Event Metric
    if (type === "order") {
      try {
        await fetch(`https://a.klaviyo.com/api/events/`, {
          method: "POST",
          headers: {
            Authorization: `Klaviyo-API-Key ${apiKey}`,
            accept: "application/json",
            "content-type": "application/json",
            revision: "2024-02-15",
          },
          body: JSON.stringify({
            data: {
              type: "event",
              attributes: {
                metric: {
                  data: {
                    type: "metric",
                    attributes: {
                      name: "Placed Order",
                    },
                  },
                },
                profile: {
                  data: {
                    type: "profile",
                    attributes: {
                      email: email,
                      first_name: customFields.first_name || "",
                      last_name: customFields.last_name || "",
                    },
                  },
                },
                properties: {
                  $value: customFields.order_total || 119.99,
                  items_purchased: customFields.items_purchased || "",
                  items_count: customFields.items_count || 1,
                  shipping_address: customFields.shipping_address || "",
                  order_source: "MANI Website Checkout",
                },
              },
            },
          }),
        });
      } catch (eventErr) {
        console.warn("[KLAVIYO EVENT METRIC NOTICE]", eventErr);
      }
    }

    if (!klaviyoResponse.ok) {
      const errorData = await klaviyoResponse.json();
      console.error("[KLAVIYO CRM ERROR]", JSON.stringify(errorData, null, 2));
      return NextResponse.json(
        {
          success: false,
          error: "Failed to sync with Klaviyo CRM.",
          details: errorData,
        },
        { status: klaviyoResponse.status }
      );
    }

    return NextResponse.json({
      success: true,
      simulated: false,
      message: `Successfully synced profile and subscribed ${email} to Klaviyo ${type} list.`,
    });
  } catch (error: any) {
    console.error("[KLAVIYO ROUTE EXCEPTION]", error);
    return NextResponse.json(
      { success: false, error: "Internal server error processing subscription." },
      { status: 500 }
    );
  }
}

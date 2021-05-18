import React from 'react';
import { connect } from 'react-redux';


export const AdobeDataLayer = ({ cartItems, history, dispatch }) => {

    const digitalData = {
        pageInstanceID: "Example page - production",
        page: {
            pageInfo: {
                pageID: "5093",
                pageName: "Example page",
                destinationURL: "https://example.com/index.html",
                referringURL: "https://example.com/referrer.html",
                sysEnv: "desktop",
                variant: "2",
                version: "1.14",
                breadCrumbs: ["Home","Example group","Example page"],
                author: "J Smith",
                issueDate: "Example date",
                effectiveDate: "Example date",
                expiryData: "Example date",
                language: "en-US",
                geoRegion: "US",
                industryCodes: "Example industry codes",
                publisher: "Example publisher"
            },
            category: {
                primaryCategory: "Example page category",
                subCategory: "Sub-category example"
            },
            attributes: {
                country: "US",
                language: "en-US"
            }
        },
        product: [{
            productInfo: {
                productID: "4859",
                productName: "Example product",
                description: "Example description",
                productURL: "https://example.com/product.html",
                productImage: "https://example.com/product_image.png",
                productThumbnail: "https://example.com/product_thumbnail.png",
                manufacturer: "Example manufacturer",
                quantity: 1,
                size: "Product size"
            },
            category: {
                primaryCategory: "Example product category",
                subCategory: "Example sub-category"
            }
        }],
        cart: {
            cartID: "934856",
            price: {
                basePrice: 200.00,
                voucherCode: "EXAMPLEVOUCHER1",
                voucherDiscount: 0.50,
                currency: "USD",
                taxRate: 0.20,
                shipping: 5.00,
                shippingMethod: "UPS",
                priceWithTax: 120,
                cartTotal: 125
            }
        },
        transaction: {
            transactionID: "694025",
            profile: {
                profileInfo: {
                    profileID: "exampleprofile",
                    userName: "exampleusername",
                    email: "user@example.com"
                },
                address: {
                    line1: "123 Vague Street",
                    line2: "Apt 1",
                    city: "Austin",
                    stateProvince: "TX",
                    postalCode: "78610",
                    country: "USA"
                },
                shippingAddress: {
                    line1: "123 Vague Street",
                    line2: "Apt 1",
                    city: "Austin",
                    stateProvince: "TX",
                    postalCode: "78610",
                    country: "USA"
                }
            }
        },
        event: [{
            category: {
                primaryCategory: "Example event category",
                subCategory: "Example sub-category"
            }
        }],
        component: [{
            componentInfo: {
                componentID: "4921",
                componentName: "Example component"
            },
            category: {
                primaryCategory: "Example event category",
                subCategory: "Example sub-category"
            }
        }],
        user: [{
            segment: "Premium membership",
            profile: [{
                profileInfo: {
                    profileID: "exampleprofile",
                    userName: "exampleusername",
                    email: "user@example.com",
                    language: "en-US",
                    returningStatus: "New"
                },
                social: {
                    facebook: "examplefacebookid",
                    twitter: "exampletwitterhandle"
                }
            }]
        }],
        privacy: {
            accessCategories: [{
                categoryName: "Default",
                domains: "adobedtm.com"
            }]
        },
        version: "1.0"
    };
    
    return (
        <script>
            window.digitalData = digitalData;
        </script>
    )
};
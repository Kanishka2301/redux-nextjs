"use server";

export async function fetchAllProducts() {
  try {
    const result = await fetch(`https://dummyjson.com/products`, {
      method: "GET",
      cache: "no-store",
    });
    const data = await result.json();

    return {
      success: true,
      data: data?.products,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Some error occurred! Please try again.",
    };
  }
}

export async function fetchProductDetails(currentProductID) {
  try {
    const result = await fetch(
      `https://dummyjson.com/products/${currentProductID}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    if (!result.ok) {
      console.error("Error fetching product details:", result.status);
      return null;
    }

    const data = await result.json();
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function loginAction() {
  await signIn("github");
}

export async function logoutAction() {
  await signOut();
}

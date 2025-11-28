'use server';
export async function getData() {
    if (process.env.phase == "dev") {
        url = process.env.DEV_URL 
    }
    else {
        url = process.env.PRODUCTION_URL;

    }
    const res = await fetch(`${url}/api/blogs`);
    const data = await res.json();
    console.log(data)
    return data;
}
'use server';
export async function getData() {
    const res = await fetch(`${process.env.URL}/api/blogs`);
    const data = await res.json();
    console.log(data)
    return data;
}
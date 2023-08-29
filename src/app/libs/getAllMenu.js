export default async function getAllMenu(){
    const result = await fetch('https://basic-blog.teamrabbil.com/api/post-categories/');
    return result.json();
}

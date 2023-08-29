export default async function getAllPosts(category_id){
    const result = await fetch(`https://basic-blog.teamrabbil.com/api/post-list/${category_id}`)
    return result.json();
}
export default async function getPostDetails(id){
    const result = await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`);
    return result.json();
}

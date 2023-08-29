export default async function getNewestPost(){
    const result = await fetch('https://basic-blog.teamrabbil.com/api/post-newest');
    return result.json();
}

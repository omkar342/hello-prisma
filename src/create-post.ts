import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
    // Create a new post using connect

    const newPost = await prisma.post.create({
        data: {
            title: 'World Tour by Joh Doe',
            content: 'This is my first blog post',
            published: true,    
            author: {
                connect: {
                    id: 2
                }
            }
        }
    })

    // Create a new post without using connect

    const newPost2 = await prisma.post.create({
        data: {
            title: 'How to Join WWE by Jane Cena',
            content: "This is my blog on wwe",
            published: true,
            authorId: 3
        }
    })
    console.log("Post Added!", newPost, newPost2);
}

main()
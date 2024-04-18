// src/mocks/handlers.js
import { HttpResponse, http } from 'msw';
import { allPosts as Products } from './mock-data';

let allPosts = [...Products];

export function withAuth(resolver: (input: { request: any }) => void) {
  return (input: { request: any }) => {
    const { request } = input;

    if (!request.headers.get('Authorization')) {
      return new HttpResponse(null, { status: 401 });
    }

    return resolver(input);
  };
}

export type ProductProps = {
  title: string;
  description: string;
  id: number;
  stock: number;
  price: number;
  thumbnail: string;
};

export const handlers = [
  // http.all('*', async () => {
  //   await delay(1000);
  // }),
  http.get('/posts', () => {
    return HttpResponse.json(allPosts);
  }),
  http.get<{ title: string }, never, ProductProps[], '/posts/:title'>(
    '/posts/:title',
    async ({ params }) => {
      const filteredProducts = allPosts.filter(p =>
        p.title.includes(params.title),
      );
      // // Push the new post to the map of all posts.
      return HttpResponse.json(filteredProducts);
    },
  ),
  http.post<never, ProductProps, ProductProps, '/posts'>(
    '/posts',
    async ({ request }) => {
      // Read the intercepted request body as JSON.
      const newProduct = await request.json();

      // Push the new post to the map of all posts.
      allPosts.push({
        ...newProduct,
        id: Math.floor(Math.random() * (10000 - 100 + 1)) + 100,
      });

      return HttpResponse.json(newProduct, { status: 201 });
    },
  ),

  http.delete<{ id: string }, never, never>('/posts/:id', ({ params }) => {
    const newArray = allPosts.filter(p => p.id !== Number(params.id));
    allPosts = newArray;
    return HttpResponse.json({ status: 202 });
  }),

  http.patch<{ id: string }, ProductProps, ProductProps, '/posts/:id'>(
    '/posts/:id',
    async ({ params, request }) => {
      const newPost = await request.json();

      const newArray = allPosts.map(p => {
        if (p.id === Number(params.id)) {
          return { ...p, ...newPost };
        }
        return p;
      });

      allPosts = newArray;

      return HttpResponse.json(newPost, { status: 202 });
    },
  ),
];

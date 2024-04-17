import { ProductProps } from '../mocks/handlers';

export const getProducts = async () => {
  try {
    const result = await fetch('/posts');
    const jsonResult = await result.json();
    return jsonResult;
  } catch (err) {
    throw new Error(`Something went wrong ${JSON.stringify(err)}`);
  }
};
export const getFilteredProducts = async (title: string) => {
  try {
    const result = await fetch(`/posts/${title}`);
    const jsonResult = await result.json();
    return jsonResult;
  } catch (err) {
    throw new Error(`Something went wrong ${JSON.stringify(err)}`);
  }
};

export const createProducts = async (data: Omit<ProductProps, 'id'>) => {
  try {
    const result = await fetch('/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const jsonResult = await result.json();
    return jsonResult;
  } catch (err) {
    throw new Error(`Something went wrong ${JSON.stringify(err)}`);
  }
};

export const deleteProducts = async (id: number) => {
  try {
    const result = await fetch(`/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const jsonResult = await result.json();
    return jsonResult;
  } catch (err) {
    throw new Error(`Something went wrong ${JSON.stringify(err)}`);
  }
};

export const updateProducts = async (
  id: number,
  data: { title?: string; description?: string },
) => {
  try {
    const result = await fetch(`/posts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const jsonResult = await result.json();
    return jsonResult;
  } catch (err) {
    throw new Error(`Something went wrong ${JSON.stringify(err)}`);
  }
};

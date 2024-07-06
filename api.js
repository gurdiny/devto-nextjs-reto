const API_URL = "https://deafio-backend.onrender.com";

export async function login(email, password) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const json = await response.json();

  return json.data.token;
}

// export async function autoLogin(url, email, password){
//   const response = await fetch()
// }

export async function getPost() {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/post`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();
  return json.data.posts;
}

// export async function getIdPost(id) {
//   const token = localStorage.getItem("token");

//   const response = await fetch(`${API_URL}/post/${id}`, {
//     method: "GET",
//     headers: {
//       Authorization: token,
//     },
//   });

//   const json = await response.json();
//   return json.data.post;
// }

export async function getIdPost(id, token) {
  const response = await fetch(`${API_URL}/post/${id}`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();
  return json.data.post;
}

export async function createUser(email, password, name, profilePic) {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      name,
      profilePic,
    }),
  });

  const json = await response.json();
  // console.log("este es el json del create", json);
  return json.data.user;
}

export async function createPost(name, image, body, user) {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No se encontró el token de autenticación");
  }

  const response = await fetch(`${API_URL}/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      name,
      image,
      body,
      user,
    }),
  });

  const json = await response.json();
  console.log(json);
  return json.data.post;
}

export async function deletePost(id) {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No se encontró el token de autenticación");
  }

  const response = await fetch(`${API_URL}/post/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`Error al eliminar el post: ${errorMessage}`);
  }

  const json = await response.json();
  console.log(json);
  return json.data.posts;
}

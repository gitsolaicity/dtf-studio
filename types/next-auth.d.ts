import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string; // ✅ добавляем кастомное поле
    };
  }

  interface User {
    role?: string; // если используешь user в jwt или authorize
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
  }
}

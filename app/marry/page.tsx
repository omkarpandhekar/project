"use client";

export default function MarryPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-rose-100 via-pink-100 to-red-100 px-4">
      <main className="w-full max-w-xl rounded-3xl bg-white/90 p-8 shadow-2xl backdrop-blur text-center">
        <h1 className="text-4xl font-extrabold text-rose-600">
          Will you marry me?
        </h1>

        <p className="mt-4 text-lg text-zinc-700">
          You already forgave me, and that means the world to me.
          Will you make me the happiest person and stay with me forever?
        </p>

        <p className="mt-2 text-base text-zinc-500">
          Tumne mujhe maaf karke sabse bada gift de diya.
          Ab ek aur chhota sa sawaal hai: kya tum mujhse shaadi karogi?
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => {
              alert(
                "Yay! 💍\nThank you! I promise to love you, respect you, and annoy you forever. 😄\nMain hamesha tumhara khayal rakhunga."
              );
            }}
            className="rounded-full bg-rose-600 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition hover:bg-rose-700 hover:shadow-xl"
          >
            Yes, forever ❤️
          </button>

          <button
            onClick={() => {
              alert(
                "Itna easy nahi chhodne wala 😜\nMain fir se puchunga, phir se mana lunga. Please soch lo ek baar aur."
              );
            }}
            className="rounded-full border border-rose-200 bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-rose-600 shadow-sm transition hover:border-rose-400 hover:bg-rose-50"
          >
            I need time
          </button>
        </div>
      </main>
    </div>
  );
}



import { SignInButton, SignUpButton } from "@clerk/clerk-react";

export default function Hero() {
  return (
    <section className="relative bg-[url(../photo-1604014237800-1c9102c219da.webp)]  bg-no-repeat bg-center bg-cover flex items-start py-16 justify-end overflow-hidden h-[80vh]">
      <div className="absolute  h-full right-0 bottom-0 bg-background skew-x-[25deg] translate-x-44 w-1/2 max-lg:hidden"></div>
      <div className="absolute inset-0 max-sm:bg-white/75 max-sm:dark:bg-gray-900/75 lg:bg-transparent sm:from-white/95 sm:to-white/25 max-lg:bg-gradient-to-l sm:dark:from-gray-900/95"></div>
      <div className="relative flex flex-col items-start w-full  max-w-md px-4 lg:w-96 ">
        <div className="my-16 text-right">
          <h2 className="mb-5  text-3xl font-extrabold tracking-tight text-text sm:text-4xl sm:leading-none">
            البوابه العقاريه
          </h2>
          <p className=" mb-5 text-base text-text md:text-lg font-semibold tracking-wider">
            اكتشف، اشترِ، وبع العقارات بسهولة على منصتنا الرائدة. سواء كنت
            مالكًا يرغب في بيع عقاره، أو مشتريًا يبحث عن العقار المثالي، أو
            مستثمرًا يسعى لفرص جديدة، فإن منصتنا توفر لك تجربة سلسة مصممة خصيصًا
            لتلبية احتياجاتك.
          </p>
          <div className="flex items-center justify-end gap-4 text-center ">
            <SignInButton
              mode="modal"
              href="#"
              className="block font-bold basis-2/5 rounded bg-primary  py-3 text-sm  text-[#ede5fa] shadow focus:outline-none focus:ring "
            >
              تسجيل الدخول
            </SignInButton>
            <SignUpButton
              mode="modal"
              href="#"
              className="block font-bold basis-2/5 rounded bg-secondary  py-3 text-sm  text-text shadow  focus:outline-none focus:ring "
            >
              تسجيل
            </SignUpButton>
          </div>
        </div>
      </div>
    </section>
  );
}

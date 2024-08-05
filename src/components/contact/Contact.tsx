import { Icon } from "@iconify/react";
export default function Contact() {
  return (
    <div className="flex flex-col bg-white  shadow-xl shadow-slate-500/30 overflow-hidden md:flex-row rounded-sm">
      <div className="form p-6 md:basis-4/6">
        <form action="" className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm text-zinc-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="text-zinc-700 border-b-2 border-zinc-200 text-xl h-12 px-2 focus:outline-none placeholder:text-sm placeholder:text-zinc-400 placeholder:italic"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm text-zinc-600">
              Email
            </label>
            <input
              type="email"
              required
              name="email"
              id="email"
              placeholder="johndoe@mail.com"
              className="text-zinc-700 border-b-2 border-zinc-200 text-xl h-12 px-2 focus:outline-none placeholder:text-sm placeholder:text-zinc-400 placeholder:italic"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-zinc-600">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              className="text-zinc-700 p-4 border-2 rounded-md border-zinc-200 text-xl h-32 px-2 focus:outline-none placeholder:text-sm placeholder:text-zinc-400 placeholder:italic"
            ></textarea>
          </div>
        </form>
      </div>
      <div className="company bg-[#2a2a2a] text-white md:flex-1 p-6">
        <div className="contact-info flex flex-col gap-8">
          <h2 className="text-2xl py-2">Contact information</h2>
          <div className="flex gap-2 items-center">
            <Icon
              icon="f7:phone-fill"
              width="20"
              height="20"
              className="text-white"
            />
            <p className=" font-light font-nunito">(916) 889-1234</p>
          </div>
          <div className="flex gap-2 items-center">
            <Icon
              icon="material-symbols:stacked-email"
              width="20"
              height="20"
              className="text-white"
            />
            <p className=" font-light font-nunito">supports@bosystem.com</p>
          </div>
          <div className="flex gap-2 items-center">
            <Icon
              icon="ion:location"
              width="20"
              height="20"
              className="text-white self-start"
            />
            <p className=" font-light font-nunito">
              4700 lang ave.
              <br /> sacramento California 95665
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

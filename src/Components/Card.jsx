import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Card = ({
  name = "no name",
  description = `Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.`,
  linkName = "stopwatch",
}) => {
  return (
    <div className="w-full h-full rounded-md bg-[#000]/20 shadow-lg ring-1 ring-black/5 border border-slate-700	">
      <Link className="no-underline hover:no-underline" to={`/${linkName}`}>
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
            {name}
          </h5>
          <p className="block text-sm font-sans antialiased font-light leading-relaxed text-inherit text-white">
            {description}
          </p>
          <p className="mt-10 sm:mt-16 gap-x-2 flex text-sm font-sans antialiased font-light leading-relaxed text-inherit text-white">
            Learn more{" "}
            <span>
              <ArrowRight />
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;

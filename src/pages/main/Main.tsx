import SectionWrapper from "../../components/SectionWrapper";
import { HeadingText, HeadingSubText } from "../../components/typo/Heading";
import {
  MissionPanel,
  MissionUL,
  MissionList,
} from "../../components/missionPanel/MissionPanel";
import { Icon } from "@iconify/react";
import { lazy, Suspense } from "react";
import ComponentLoading from "../../components/loading/ComponentLoading";
import {
  Card,
  CardIcon,
  CardTitle,
  CardContext,
} from "../../components/card/Card";

import { Product } from "../../components/Product/Product";
const Testimonial = lazy(
  () => import("../../components/testimonial/Testimonial")
);
const Contact = lazy(() => import("../../components/contact/Contact"));
export default function Main() {
  return (
    <>
      <SectionWrapper background="bg-slate-300">
        <HeadingText>
          Our Missions
          <HeadingSubText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            iusto!
          </HeadingSubText>
        </HeadingText>
        <MissionPanel inverse>
          <img
            src="./product.jpeg"
            alt="products"
            className="rounded-md h-full w-full object-cover md:w-80 md:h-80 ring-4
            border-2 border-emerald-300 ring-emerald-400 ring-offset-2"
          />
          <div>
            <h3 className="text-3xl leading-tight font-semibold text-emerald-900 pb-4">
              Delivery high Craftsmanship
            </h3>
            <MissionUL>
              <MissionList>
                Experience unparalleled craftsmanship with every detail in your
                custom-built home.
              </MissionList>
              <MissionList>
                Discover the artistry of home building with our team of skilled
                craftsmen dedicated to delivering excellence.
              </MissionList>
              <MissionList>
                Our dedication to high craftsmanship ensures that your dream
                home is meticulously crafted to perfection.
              </MissionList>
            </MissionUL>
          </div>
        </MissionPanel>
        <MissionPanel background="bg-yellow-50">
          <img
            src="./inovation.webp"
            alt="products"
            className="rounded-md h-full w-full object-cover md:w-80 md:h-80 ring-4
            border-2 border-yellow-300 ring-yellow-400 ring-offset-2"
          />
          <div>
            <h3 className="text-3xl leading-tight font-semibold text-yellow-900 pb-4">
              Innovation products
            </h3>
            <MissionUL>
              <MissionList>
                Redefine modern living with our innovative home designs.
              </MissionList>
              <MissionList>
                Experience the future of home building with our cutting-edge
                construction techniques.
              </MissionList>
              <MissionList>
                Stay ahead of the curve in home design and construction with our
                innovative building practices.
              </MissionList>
            </MissionUL>
          </div>
        </MissionPanel>
        <MissionPanel inverse background="bg-rose-50">
          <img
            src="./integrity.webp"
            alt="products"
            className="rounded-md h-full w-full object-cover md:w-80 md:h-80 ring-4
            border-2 border-rose-300 ring-rose-400 ring-offset-2"
          />
          <div>
            <h3 className="text-3xl leading-tight font-semibold text-rose-900 pb-4">
              Integrity
            </h3>
            <MissionUL>
              <MissionList>
                With a focus on integrity, we deliver homes that stand the test
                of time and exceed expectations.
              </MissionList>
              <MissionList>
                Experience peace of mind knowing that integrity and honesty
                drive every step of our home building process.
              </MissionList>

              <MissionList>
                Experience peace of mind knowing that integrity and honesty
                drive every step of our home building process.
              </MissionList>
            </MissionUL>
          </div>
        </MissionPanel>
      </SectionWrapper>
      <SectionWrapper background="bg-slate-200">
        <HeadingText>
          Products
          <HeadingSubText>
            We have provide a wide range of products to our customers.
          </HeadingSubText>
        </HeadingText>

        <div className="product-contains flex flex-col gap-8 my-14">
          <Product
            product="AC tune up"
            price={189}
            discountPercent={30}
            description="Including safety check, free water inspection, heater inspection."
          />

          <Product
            product="Brand new AC and heater"
            price={12500}
            month={134}
            imagePath="./ac-heater.png"
            description="Including free installation and preparation."
          />
          <Product
            product="Complete solar solution"
            price={8999}
            month={149}
            imagePath="./solar-1.png"
            description="Go for complete solar solution. Including free installation and preparation."
          />
          <Product
            product="All-2-in-1"
            price={199}
            discountPercent={25}
            offerEnd="offer ended july 14"
            imagePath="./all-in-one.png"
            description="HAVC Air Conditioning and Heating System. Free water inspection."
          />
          <button className="ring-[3px] ring-primary   py-4 text-primary font-nunito font-semibold text-md rounded-3xl">
            More products
          </button>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <HeadingText>
          Support
          <HeadingSubText>
            We are support every steps through the building process. Our support
            team are amazing with customers.
          </HeadingSubText>
        </HeadingText>

        <div className="cards my-10 flex flex-col md:flex md:flex-row gap-6">
          <Card color="secondary">
            <CardIcon>
              <Icon
                icon="fluent:person-support-20-filled"
                width="60"
                height="60"
                className="text-secondary"
              />
            </CardIcon>
            <CardTitle>Customer Support</CardTitle>
            <CardContext>
              Our dedication to round-the-clock support ensures that you can
              contact us at any time for assistance.
            </CardContext>
          </Card>

          <Card color="tertiary">
            <CardIcon>
              <Icon
                icon="pepicons-print:gear"
                width="60"
                height="60"
                className="text-tertiary"
              />
            </CardIcon>
            <CardTitle>Maintenance Plans</CardTitle>
            <CardContext>
              Preserving the present, securing the future - with our maintenance
              plans.
            </CardContext>
          </Card>
          <Card color="primary">
            <CardIcon>
              <Icon
                icon="uim:schedule"
                width="60"
                height="60"
                className="text-primary"
              />
            </CardIcon>
            <CardTitle>Scheduling</CardTitle>
            <CardContext>
              We provide a sechedule and find the affortable price for your
              service.
            </CardContext>
          </Card>
        </div>
      </SectionWrapper>

      <SectionWrapper background="bg-slate-200">
        <HeadingText>
          Testimonial
          <HeadingSubText>
            Discover what our valued customers have to say about their
            experiences with us and the exceptional service they have received.
          </HeadingSubText>
        </HeadingText>
        <Suspense fallback={<ComponentLoading />}>
          <Testimonial />
        </Suspense>
      </SectionWrapper>

      <SectionWrapper>
        <HeadingText>
          Contact us
          <HeadingSubText>
            Feel free to contact us our support team. We're more than happy to
            negotiation and answer any questions you may have.
          </HeadingSubText>
        </HeadingText>
        <Suspense fallback={<ComponentLoading />}>
          <Contact />
        </Suspense>
      </SectionWrapper>
    </>
  );
}

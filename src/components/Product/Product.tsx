import './Product.css';

const getDiscountedPrice = (price: number, discountPercent: number) => {
  return Math.round(price - price * (discountPercent / 100));
};
type Props = {
  product: string;
  description: string;
  price: number;
  month?: number | undefined;
  offerEnd?: string;
  discountPercent?: number;
  imagePath?: string;
};
export const Product = ({
  product,
  description,
  price,
  month = undefined,
  offerEnd,
  discountPercent,
  imagePath,
}: Props) => {
  return (
    <div className="product-item flex flex-col gap-4 bg-white ring-slate-200 rounded-3xl ring-offset-2 ring-offset-slate-400 ring-4 border-2 p-6 md:flex-row">
      <div className="product-name flex flex-col gap-2 md:basis-2/3">
        <h3 className="font-bold font-nunito text-3xl text-zinc-800 ">
          {product}
        </h3>
        <p className="text-lg leading-tight md:text-sm">{description}</p>
      </div>
      <div className="product-price text-center text-slate-700 flex flex-col self-center md:basis-1/3 tracking-tight select-none">
        {!month ? (
          <div className="flex items-center gap-4">
            {discountPercent ? (
              <>
                <p className="italic font-bold text-2xl original-price opacity-80">
                  ${price}
                </p>
                <p className="italic font-bold text-2xl md:text-5xl">
                  ${getDiscountedPrice(price, discountPercent)}
                </p>
              </>
            ) : (
              <p className="italic font-bold text-5xl">${price}</p>
            )}
          </div>
        ) : (
          <>
            <p className="italic font-bold text-2xl md:text-3xl">
              ${month}/month
            </p>
            <p className="text-sm font-semibold">or as lower as ${price}</p>
          </>
        )}
      </div>
      <div className="product-reps-img md:w-64 md:h-28 md:basis-1/3">
        <img
          src={`${imagePath ? imagePath : './air-conditioner-tune-up.png'}`}
          className="rounded-2xl h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className="product-cta self-center md:self-start md:flex md:align-middle md:flex-col md:basis-1/3 md:text-center">
        <button className="bg-secondary hover:bg-secondary/95 transition-all duration-200 cursor-pointer text-slate-100 px-6 py-3 rounded-xl tracking-normal font-semibold text-balance">
          See detail
        </button>
        <p className="italic text-sm text-slate-400 pt-2">
          {offerEnd ? offerEnd : ''}
        </p>
      </div>
    </div>
  );
};
export default Product;

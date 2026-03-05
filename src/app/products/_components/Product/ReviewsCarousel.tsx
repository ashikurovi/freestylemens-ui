import EmblaCarousel from "../../../../components/shared/EmblaCarousel";
import { Rate } from "antd";
import { Review } from "@/types/review";
import { FaUser } from "react-icons/fa";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const formatDate = (value?: string) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const ReviewsCarousel = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="py-4">
      <EmblaCarousel arrowButtons autoplay>
        {reviews.map((review: Review, index: number) => (
          <div
            key={index}
            className="flex-[0_0_100%] min-[450px]:flex-[0_0_75%] sm:flex-[0_0_60%] md:flex-[0_0_50%] lg:flex-[0_0_35%] pl-4"
          >
            <div className="h-full rounded-[20px] border border-gray-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative group">
              <div className="absolute top-8 right-8 text-gray-100/80 group-hover:text-gray-100 transition-colors">
                <BiSolidQuoteAltLeft size={48} />
              </div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gray-50 border border-gray-100 text-gray-400">
                  <FaUser size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
                    {review.userName || "Customer"}
                  </h3>
                  <p className="text-sm font-medium text-gray-400 mt-0.5">
                    {formatDate(review.createdAt)}
                  </p>
                </div>
              </div>

              <div className="mb-4 relative z-10">
                <Rate 
                  disabled 
                  defaultValue={review.rating} 
                  allowHalf 
                  style={{ fontSize: 16, color: "#F59E0B" }} 
                />
              </div>

              <p className="text-[15px] leading-relaxed text-gray-600 line-clamp-4 relative z-10 font-medium">
                {review.comment}
              </p>
            </div>
          </div>
        ))}
      </EmblaCarousel>
    </div>
  );
};

export default ReviewsCarousel;

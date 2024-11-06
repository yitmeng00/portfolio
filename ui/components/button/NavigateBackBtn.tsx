import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useRouter } from "next/navigation";

const NavigateBackBtn: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <section className="navigate-back-btn__wrapper" onClick={handleBack}>
      <button>
        <ArrowBackIosNewIcon fontSize="large" sx={{ color: "#504538" }} />
      </button>
    </section>
  );
};

export default NavigateBackBtn;

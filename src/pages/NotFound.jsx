import ErrorPage from "../components/ErrorPage";

export default function NotFound({code}) {
    let error = {
      code: "404",
      description: "Halaman tidak ditemukan.",
      image: "https://image.web.id/images/24-Error-404-Not-Found-Apa-Artinya-serta-Gimana-Metode-Mengatasinya-1024x576.jpg",
    };
  
    if (code === "400") {
      error = {
        code: "400",
        description: "Permintaan tidak valid.",
        image: "https://www.elegantthemes.com/blog/wp-content/uploads/2020/07/000-HTTP-Error-400.png",
      };
    } else if (code === "401") {
      error = {
        code: "401",
        description: "Anda tidak memiliki izin.",
        image: "https://www.elegantthemes.com/blog/wp-content/uploads/2019/12/401-error-wordpress-featured-image.jpg",
      };
    } else if (code === "403") {
      error = {
        code: "403",
        description: "Akses ditolak.",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*MIrLuyiCDpdNbnFYxYlKtA.png",
      };
    }

    return (
      <ErrorPage
        code={error.code}
        description={error.description}
        image={error.image}
      />
    );
  }
  
export default function selectionFilter({ series, films }) {
  return {
    series: [
      {
        title: "Documentaries",
        data: series.filter((item) => {
          return item.genre === "documentaries";
        }),
      },
      {
        title: "Comedies",
        data: series.filter((item) => {
          return item.genre === "comedies";
        }),
      },
      {
        title: "Children",
        data: series.filter((item) => {
          return item.genre === "children";
        }),
      },
      {
        title: "Crime",
        data: series.filter((item) => {
          return item.genre === "crime";
        }),
      },
      {
        title: "Feel Good",
        data: series.filter((item) => {
          return item.genre === "feel-good";
        }),
      },
    ],
    films: [
      {
        title: "Drama",
        data: films.filter((item) => {
          return item.genre === "drama";
        }),
      },
      {
        title: "Thriller",
        data: films.filter((item) => {
          return item.genre === "thriller";
        }),
      },
      {
        title: "Children",
        data: films.filter((item) => {
          return item.genre === "children";
        }),
      }, 
      {
        title: "Suspense",
        data: films.filter((item) => {
          return item.genre === "suspense";
        }),
      },
      {
        title: "Romance",
        data: films.filter((item) => {
          return item.genre === "romance";
        }),
      },
    ],
  };
}

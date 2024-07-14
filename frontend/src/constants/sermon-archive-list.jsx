const listItems = [
    {
      title: "Biographical Sermons",
      link: "",
    },
    {
      title: "Doctrinal Sermons",
      link: "",
    },
    {
      title: "Practical Sermons",
      link: "",
    },
    {
      title: "Expository Sermons",
      link: "",
    },
    {
      title: "Special Videos",
      link: "",
    },
  ];

  const sorters = [
    {
      name: "All",
    },
    {
      name: "Recent",
      link: "",
    },
    {
      name: "Old",
      link: "",
    },
    {
      name: "Playlist",
      link: "",
    },
  ];

  // ALL, RECENT, OLD, PLAYLIST FILTERS SWITCH DIV
  let content;

  switch (sorterActive) {
    case 0:
      content = sermon.map((sermon, index) => (
        <SermonVideoDiv
          key={index}
          link={`/sermon-details/${sermon.slug}`}
          image={sermon.thumbnail}
          title={sermon.title}
          preacher={sermon.preached_by}
          category={sermon.sermon_category.title}
        />
      ));
      break;
    case 1:
      content = sermon.map((sermon, index) => (
        <SermonVideoDiv
          key={index}
          link={`/sermon-details/${sermon.slug}`}
          image={sermon.thumbnail}
          title={sermon.title}
          preacher={sermon.preached_by}
          category={sermon.category}
        />
      ));
      break;
    case 2:
      content = (
        <section className="">
          <div className="grid grid-cols-1 size-64 rounded-xl shadow-xl ">
            <div className="">
              <div
                className="w-full h-full p-2 z-10"
                style={{ backgroundImage: `url(${image1})` }}
              ></div>
              <div
                className="w-full h-full p-3 z-20"
                style={{ backgroundImage: `url(${image1})` }}
              ></div>
              <div
                className="w-full z-30"
                style={{ backgroundImage: `url(${image1})` }}
              ></div>
            </div>
            <div className="bg-white rounded-tr-[50%] rounded-bl-xl rounded-br-xl p-4">
              <h1 className="font-extrabold text-center">Abide with me</h1>
            </div>
          </div>
        </section>
      );
      break;
    case 3:
      content = null;
    case 4:
      content = (
        <div className=" w-full">
          <ArchivePlaylistDiv playlistSermon={sermon} />
        </div>
      );
      break;
    default:
      content = null;
  }

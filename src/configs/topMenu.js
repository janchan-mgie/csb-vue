export function links() {
  return [
    {
      title: "market",
      routers: [
        {
          icon: "trending_up",
          link: "home",
          title: "home"
        },
        {
          icon: "notifications_active",
          link: "about",
          title: "about"
        }
      ]
    },
    {
      title: "content",
      routers: [
        {
          icon: "library_books",
          link: "editor",
          title: "editor"
        }
      ]
    }
  ];
}

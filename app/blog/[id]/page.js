import Layout from "@/components/layout/Layout";
import data from "@/util/blog.json";

// Generate semua path statis → wajib untuk output: 'export'
export async function generateStaticParams() {
  return data.map((item) => ({
    id: item.id.toString(),
  }));
}

// Ambil data blog berdasarkan ID
async function getBlog(id) {
  return data.find((item) => item.id.toString() === id);
}

export default async function BlogDetails({ params }) {
  const blogPost = await getBlog(params.id);

  if (!blogPost) {
    return (
      <div className="container py-20">
        <h2>Blog tidak ditemukan</h2>
      </div>
    );
  }

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      headerCls="header-style-2 header-style-4"
    >
      <section className="section-box box-content-blog-2 box-content-blog-post">
        <div className="container">
          <div className="text-center blog-head">
            <span className="btn btn-brand-4-sm">Technology</span>
            <h2 className="heading-2 mb-20 mt-15">{blogPost.title}</h2>
            <p className="text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem...
            </p>
          </div>

          <div className="row">
            <div className="col-lg-1" />
            <div className="col-lg-10">
              <div className="box-content-detail-blog">
                <div className="box-image-header">
                  <img
                    alt={blogPost.title}
                    src={`/assets/imgs/page/blog/${blogPost.img}`}
                  />
                </div>

                <div className="box-detail-info">
                  <p>Design comps, layouts, wireframes—will your clients...</p>
                  <img
                    src="/assets/imgs/page/blog/img-detail2.png"
                    alt="Detail"
                  />
                  <p>The toppings you may chose...</p>

                  <blockquote>
                    Design comps, layouts, wireframes—we believe that clients...
                  </blockquote>

                  <p>More article details...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended */}
      <section className="section-box box-content-recommended">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-55">Recommended Articles</h2>
          </div>

          <div className="row">
            {data.slice(0, 3).map((item) => (
              <div className="col-lg-4" key={item.id}>
                <div className="card-news-style-2">
                  <div className="card-image">
                    <img
                      src={`/assets/imgs/page/blog/${item.img}`}
                      alt={item.title}
                    />
                  </div>
                  <div className="card-info">
                    <div className="card-meta">
                      <span className="btn btn-tag-sm">Technology</span>
                      <span className="date-post">16 October 2023</span>
                    </div>

                    <div className="card-title">{item.title}</div>
                    <div className="card-more">
                      <a className="btn btn-learmore-2" href={`/blog/${item.id}`}>
                        Read More →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

import Link from "next/link";

function Form({ type, post, setPost, submitting, handleSubmit }) {
  const categories = [
    "Adventure",
    "Romance",
    "Mystery",
    "Travel",
    "Personal Development",
    "Career and Work",
    "Relationships",
    "Regrets",
    "Memorable",
    "Other",
  ];

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient text-4xl">{type} Post</span>
      </h1>
      <form
        action=""
        onSubmit={handleSubmit}
        className="bg-[#02044A] mt-10 w-full max-w-2xl flex flex-col gap-7 p-5 rounded-xl"
      >
        <div className="flex gap-5 max-md:flex-col">
          <label htmlFor="" className="w-[50%] flex flex-col gap-10 max-md:w-full">
            <span className="font-satoshi font-semibold text-base text-white ">
              Tell Your Story
            </span>
            <p className=" text-left max-w-md text-gray-100 text-sm">
              {type} and share your experiences and younger generations to come,
              and let others learn from your experiences
            </p>
          </label>

          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={post.prompt}
            onChange={(e) =>
              setPost((prevPost) => ({ ...prevPost, prompt: e.target.value }))
            }
            placeholder="Story here ......"
            required
            className="form_textarea"
          />
        </div>

        <label htmlFor="" className="flex justify-center items-center gap-4">
          <span className="font-satoshi font-semibold  text-xl text-white">
            Category
          </span>
          <select
            value={post.category}
            onChange={(e) =>
              setPost((prevPost) => ({ ...prevPost, tag: e.target.value }))
            }
            required
            className="rounded-lg p-2 outline-none"
          >
            <option value="">Select a Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-100 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-[#5593e3] rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;

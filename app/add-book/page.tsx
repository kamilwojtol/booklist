import { Input, Select } from "@headlessui/react";

export default function AddBook() {
  return (
    <div className="flex justify-center flex-col">
      <h2 className="mt-3 ml-2">Add Book</h2>
      <form className="mx-auto w-1/3">
        <label
          className="mt-2 text-white font-bold h-20 cursor-pointer"
          htmlFor="file"
        >
          Add Image
        </label>
        <input
          className="file:mt-3 file:mr-2 file:h-20 file:w-1/3 file:rounded-lg file:border-none file:bg-white/5 hover:file:bg-white/7 focus:bg-white/7 py-2 file:text-sm/6 text-whiteblock w-full text-sm text-gray-500 cursor-pointer"
          type="file"
          id="image"
          name="image"
        />
        <label htmlFor="title">
          <h3 className="mt-2 text-white font-bold">Title</h3>
          <Input
            className="mt-3 h-10 block w-full rounded-lg border-none bg-white/5 hover:bg-white/7 focus:bg-white/7 px-3 py-1.5 text-sm/6 text-white outline-0"
            type="text"
            id="title"
            name="title"
          />
        </label>
        <label htmlFor="author">
          <h3 className="mt-2 text-white font-bold">Author</h3>
          <Input
            className="mt-3 h-10 block w-full rounded-lg border-none bg-white/5 hover:bg-white/7 focus:bg-white/7 px-3 py-1.5 text-sm/6 text-white outline-0"
            type="text"
            id="author"
            name="author"
          />
        </label>
        <label htmlFor="genre">
          <h3 className="mt-2 text-white font-bold">Genre</h3>
          <Select
            className="mt-3 h-10 block w-full rounded-lg border-none bg-white/5 hover:bg-white/7 px-3 py-2 text-sm/6 text-white outline-0"
            id="genre"
            name="genre"
          >
            <option className="mt-3 block w-full rounded-lg border-none bg-white/5 hover:bg-white/7 focus:bg-white/7 px-3 py-1.5 text-sm/6 text-white">
              Fantasy
            </option>
            <option className="mt-3 block w-full rounded-lg border-none bg-white/5 hover:bg-white/7 focus:bg-white/7 px-3 py-1.5 text-sm/6 text-white">
              Crime
            </option>
            <option className="mt-3 block w-full rounded-lg border-none bg-white/5 hover:bg-white/7 focus:bg-white/7 px-3 py-1.5 text-sm/6 text-white">
              Novel
            </option>
          </Select>
        </label>
      </form>
    </div>
  );
}

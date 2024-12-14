import SearchForm from "@/components/Forms/SearchForm";

export default function Home() {
  return (
    <div className="flex w-full h-full items-center">
      <main className="flex mx-auto items-center flex-col max-w-lg">
        <SearchForm />
      </main>
    </div>
  );
}

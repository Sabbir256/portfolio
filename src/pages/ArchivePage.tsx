import Title from "@/components/ui/Title";
import { IconArrowRight, IconGithub } from "@/icons";
import { Link } from "react-router-dom";

function ArchivePage() {
  return (
    <div className="min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 mx-auto lg:py-24">
      <Link
        to="/portfolio/"
        className="group leading-tight font-semibold text-base relative transition-colors text-blue-600 inline-flex items-center mb-2"
      >
        <IconArrowRight className="rotate-180 mr-1 size-4 transition-transform group-hover:-translate-x-2" />
        Sabbir Ahmed
      </Link>

      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
        All Projects
      </h1>

      <table className="w-full mt-12 text-left border-collapse">
        <thead className="sticky top-0 z-10 border-b px-6 py-5">
          <tr>
            <th className="py-4 pr-8 text-sm font-semibold">Year</th>
            <th className="py-4 pr-8 text-sm font-semibold">Project</th>
            <th className="py-4 pr-8 text-sm font-semibold hidden lg:table-cell">
              Made at
            </th>
            <th className="py-4 pr-8 text-sm font-semibold hidden lg:table-cell">
              Built With
            </th>
            <th className="py-4 pr-8 text-sm font-semibold hidden sm:table-cell">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          <TableRow
            year="2024"
            title="Key/Value Store like Redis"
            builtWith={["Golang", "RESP", "AOF"]}
            github="https://github.com/Sabbir256/fastdb"
          />
          <TableRow
            year="2020"
            title="Portfolio Website (v1)"
            builtWith={["jQuery", "Bootstrap", "HTML", "CSS", "JavaScript"]}
            url="https://sabbir256.github.io"
          />
          <TableRow
            year="2018"
            title="eTender Application"
            madeAt="RUET"
            builtWith={["PHP", "MySQL", "JavaScript", "BootStrap"]}
          />
        </tbody>
      </table>
    </div>
  );
}

type TableRowProps = {
  year: string;
  title: string;
  madeAt?: string;
  builtWith: string[];
  url?: string;
  github?: string;
};

function TableRow({
  year,
  title,
  madeAt,
  builtWith,
  url,
  github,
}: TableRowProps) {
  return (
    <tr className="border-b last:border-none">
      <td className="py-4 pr-4 align-top text-sm">{year}</td>
      <td className="py-4 pr-4 align-top text-md font-semibold text-gray-800">
        <div className="hidden sm:block">{title}</div>
        <div className="block sm:hidden">
          {url && <Title title={title} url={url} />}
          {github && <Title title={title} url={github} />}
          {!(url || github) && <div>{title}</div>}
        </div>
      </td>
      <td className="py-4 pr-4 align-top text-sm hidden lg:table-cell">
        {madeAt}
      </td>
      <td className="py-4 pr-4 align-top text-sm hidden lg:table-cell">
        <ul className="flex flex-wrap -translate-y-1.5">
          {builtWith.map((name, idx) => (
            <li className="my-1 mr-1" key={idx + name}>
              <div className="bg-blue-500/10 rounded-full px-3 py-1 text-xs text-blue-600 tracking-tight font-medium">
                {name}
              </div>
            </li>
          ))}
        </ul>
      </td>
      <td className="py-4 text-sm font-medium text-gray-800 align-top hidden sm:table-cell">
        {url && <Title title={url.split("://")[1]} url={url} />}
        {github && (
          <a
            href={github}
            className="hover:text-blue-600"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="inline-flex items-center font-normal">
              GitHub
              <IconGithub className="ml-2 size-4" />
            </div>
          </a>
        )}
      </td>
    </tr>
  );
}

export default ArchivePage;

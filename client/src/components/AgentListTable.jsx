import React from "react";

const AgentListTable = ({ data, onComplainClick }) => {
  return (
    <div>
      {
        data?.length === 0 ? (
          <div className="text-center text-white font-bold">
            No data available
          </div>
        ) : (
          <div className="w-full my-4">
            <table className="w-full border-collapse border font-bold border-white text-white text-center text-base leading-snug">
              <thead>
                <tr>
                  <th className="border border-white px-1 py-2 whitespace-nowrap">ID NO</th>
                  <th className="border border-white px-1 py-2 whitespace-nowrap">TYPE</th>
                  <th className="border border-white px-1 py-2 whitespace-pre-wrap">SITE</th>
                  <th className="border border-white px-1 py-2 whitespace-pre-wrap">PHONE NUMBER</th>
                  <th className="border border-white px-1 py-2 whitespace-nowrap">COMPLAIN</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.id}>
                    <td className="border border-white px-1 py-2">{row?.uniqueId}</td>
                    <td className="border border-white px-1 py-2">{row?.type}</td>
                    <td className="border border-white px-1 py-2 whitespace-pre-wrap break-words">
                      {row?.sites?.split('||').map((site, index) => (
                        <span key={index} className="block">{`|| ${site.trim()} ✅`}</span>
                      ))}
                    </td>
                    <td className="border border-white px-1 py-2 whitespace-pre-wrap break-words">
                      <a
                        href={`https://wa.me/${row?.agentNumber?.replace(/\+/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#ff7c7c] duration-200 text-white underline break-all"
                      >
                        {row?.agentNumber}
                      </a>
                    </td>
                    <td
                      className="underline border border-white cursor-pointer px-1 py-2"
                      onClick={() => onComplainClick(row?.agentNumber)}
                    >
                      অভিযোগ
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        )
      }

    </div>
  );
};

export default AgentListTable;

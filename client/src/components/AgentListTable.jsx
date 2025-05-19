import React from 'react';

const AgentListTable = ({data}) => {
    return (
        <div>
            <div className=" my-4">
                  <table className="w-full border-collapse border font-bold border-white text-white text-center my-4">
                    <thead className="">
                      <tr>
                        <th className="border border-white px-4 py-2">ID NO</th>
                        <th className="border border-white px-4 py-2">TYPE</th>
                        <th className="border border-white px-4 py-2">SITE</th>
                        <th className="border border-white px-4 py-2">PHONE NUMBER</th>
                        <th className="border border-white px-4 py-2">COMPLAIN</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {data.map((row) => (
                        <tr key={row.id}>
                          <td className="border border-white px-4 py-2">{row.id}</td>
                          <td className="border border-white px-4 py-2">{row.type}</td>
                          <td className="border border-white px-4 py-2">
                            {row.site.map((site, index) => (
                              <span key={index} className="text-white font-bold">|| {site}✅{index < row.site.length - 1 ? <br></br> : ''}</span>
                            ))}
                          </td>
                          <td className="border border-white px-4 py-2">
                            <a
                              href={`https://wa.me/${row.phone}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-[#ff7c7c] duration-200 text-white underline"
                            >
                              {row.phone}
                            </a>
                          </td>
                          <td className="underline border border-white">অভিযোগ</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  
                </div>
        </div>
    );
};

export default AgentListTable;
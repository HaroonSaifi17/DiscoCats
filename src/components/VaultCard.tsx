import { AiFillInfoCircle } from 'react-icons/ai';
import VaultDialogMenu from './VaultDialogMenu';

export default function VaultCard({
  title,
  image,
  stats,
  total,
  price,
}: {
  title: string;
  image: string;
  stats: {
    earnings: string;
    newAPR: string;
    lockedInPeriod: string;
  };
  total: string;
  price: string;
}) {
  return (
    <div className="border-gunmetal relative w-full max-w-[300px] overflow-hidden rounded-xl border-1 bg-white shadow max-md:max-w-[250px] max-sm:max-w-[400px]">
      <h2 className="bg-yellow mb-2 flex w-full items-center justify-center gap-2 rounded-[0%_0%_46%_48%_/_0%_0%_30%_30%] py-1 text-center font-semibold text-black">
        {title}
        <AiFillInfoCircle className="text-white" />
      </h2>
      <div className="flex justify-between px-2">
        <div className="border-gunmetal bg-cream text-sienna flex items-center rounded-xl border-1 px-3 py-1 font-bold">
          <img
            width="20px"
            src="https://obya3wwefi.ufs.sh/f/vL3P6gZND4Zg2wLcgFI2X0sAlkHeonWU1ufcmjTZCFEQrBOz"
            alt="coin"
          />
          {price}
        </div>
        <div className="border-gunmetal text-sienna bg-cream flex items-center gap-2 rounded-xl border-1 px-3 py-1 font-bold">
          <img
            width="17px"
            className="p-[1px] shadow"
            src="https://obya3wwefi.ufs.sh/f/vL3P6gZND4ZgnCSyQpwrZbIPCng039uaFWQYG8AyrMzoeqsf"
            alt="total"
          />
          {total}
        </div>
      </div>
      <div className="-mt-2 mb-4 flex justify-center">
        <div
          style={{
            background: 'conic-gradient(#b91c1c 0% 65%, transparent 65% 100%)',
          }}
          className="relative aspect-square w-[130px] rounded-full"
        >
          <img
            className="absolute top-1/2 left-1/2 w-[126px] -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-white"
            src={image}
            alt="title"
          />
        </div>
      </div>

      <div className="border-gunmetal bg-cream mx-6 flex justify-between rounded-full border-1 px-2 py-1 text-sm">
        <span>Earnings:</span>
        <span className="text-sienna font-bold">{stats.earnings}</span>
      </div>
      <div className="border-gunmetal bg-cream mx-6 flex justify-between rounded-full border-x-1 px-2 py-1 text-sm">
        <span>Net APR:</span>
        <span className="text-sienna font-bold">{stats.newAPR}</span>
      </div>
      <div className="border-gunmetal bg-cream mx-6 flex justify-between rounded-full border-1 px-2 py-1 text-sm">
        <span>Locked-In Period:</span>
        <span className="text-sienna font-bold">{stats.lockedInPeriod}</span>
      </div>
        <VaultDialogMenu />
    </div>
  );
}

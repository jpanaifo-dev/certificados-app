import type { ICertificate } from "@/types";
import PdfGenerator from "./PdfGenerator";

interface IProps {
  userdata: ICertificate;
}

export const PdfView = (props: IProps) => {
  const { userdata } = props;

  return (
    <div>
      <PdfGenerator>
        <div className="w-[1024px] h-[800px] bg-black/opacity-0 justify-center items-center inline-flex">
          <div className="w-[1024px] h-[800px] relative bg-black/opacity-0 flex-col justify-start items-start flex">
            <div className="w-[1024px] h-[800px] relative bg-black/opacity-0 flex-col gap-6">
              <img
                className="left-0 top-[-10px] absolute object-cover object-center"
                src="/public/images/plantilla 3.png"
              />

              <div className="w-[459px] h-[27px] left-[270px] top-[305px] absolute text-center text-neutral-800 font-normal">
                {userdata["nombres y apellidos"]}
              </div>
              <div className="w-[459px] h-[27px] left-[270px] top-[305px] absolute text-center text-neutral-800 font-normal">
                {userdata.curso}
              </div>
            </div>
          </div>
        </div>
      </PdfGenerator>
    </div>
  );
};

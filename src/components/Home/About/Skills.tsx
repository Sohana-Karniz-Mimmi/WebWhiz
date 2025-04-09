import Image from "next/image";

const Skills = () => {
  const skills = [
    { name: "Graphic Design", percentage: 65 },
    { name: "Lead Generation", percentage: 87 },
    { name: "Product Design", percentage: 45 },
    { name: "UI/UX design", percentage: 75 },
  ];

  const stats = [
    { value: "58+", label: "Project Delivery" },
    { value: "120+", label: "Happy Clients" },
    { value: "32+", label: "Yours Experience" },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 md:mt-[48px] mt-[30px]">
      {/* Skills */}
      <div className="flex-1 p-[50px] rounded-[12px] bg-[rgba(24,90,217,0.04)] max-w-[554px] h-[348px]">
        {skills.map((skill, index) => (
          <div key={index} className="mb-[16px] last:mb-0 xl:pl-[2px]">
            <h3 className="text-[16px] font-semibold leading-[150%] mb-[4px]">
              {skill.name}
            </h3>
            <div className="flex items-center gap-[12px]">
              <div className="flex-1 h-[10px] rounded-[16px] overflow-hidden">
                <div
                  className="h-full rounded-[16px] bg-[linear-gradient(99deg,_#5F90F0_5.67%,_#185AD9_98.08%)]"
                  style={{ width: `${skill.percentage}%` }}
                />
                <div className="h-full w-full rounded-[16px] -mt-[10px] bg-[linear-gradient(99deg,_rgba(95,144,240,0.10)_5.67%,_rgba(24,90,217,0.10)_98.08%)]" />
              </div>
              <span className="text-[14px] font-normal leading-[160%] text-body">
                {skill.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Image */}
      <div className="flex-1 max-w-[554px] h-[312px] rounded-[12px] bg-[#F4FBF7] relative flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/about.png"
            alt="Skills illustration"
            fill
            className="object-cover rounded-[12px]"
          />
        </div>

        {/* Box */}
        <div className="absolute -bottom-[72px] left-0 -right-[130px] flex justify-center">
          <div className="w-full max-w-[531px] h-[124px] p-[32px] rounded-[12px] bg-gradient-to-r from-primary-start to-primary-end flex items-center justify-between">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-[32px]">
                <div className="text-center">
                  <p className="text-white text-[24px] font-bold leading-[140%]">
                    {stat.value}
                  </p>
                  <p className="text-white/80 text-[15px] font-normal leading-[160%]">
                    {stat.label}
                  </p>
                </div>
                {index < stats.length - 1 && (
                  <div className="w-[2px] h-[60px] rounded-[16px] bg-[rgba(226,244,234,0.5)] mr-[32px]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

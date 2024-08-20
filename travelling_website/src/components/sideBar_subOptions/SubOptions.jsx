const SubOptions = ({ icon: Icon, op }) => {
  return (
    <div className="w-full h-1/6 flex  items-center cursor-pointer text-white">
      <Icon className=" ml-9 mr-2 w-6 h-6" /> 
      <p>{op}</p>
    </div>
  );
};

export default SubOptions;

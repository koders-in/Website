import axios from "axios";


export const sendCandidateDetails = async (data) => {
  try {
    const res:any =await  axios.get("api/webhook",{
      headers:{
        job:"job"
      }
    });
    const embed = {
      embeds: [
        {
          title: "Download resume",
          description: `${data.fName} is apply for job`,
          url: data?.downloadLink,
          color: 3447003,
          author: {
            name: data?.fName,
          },
          fields: [
            {
              name: "First Name",
              value: data?.fName,
              inline: true,
            },
            {
              name: "Last Name",
              value: data?.lName,
              inline: true,
            },
            {
              name: "Email",
              value: data?.email,
              inline: true,
            },
            {
              name: "Mobile Number",
              value: data?.mobile,
              inline: true,
            },
            {
              name: "Website URL/Portfolio URL",
              value: data?.portfolioURL || "Not provided",
              inline: true,
            },
            {
              name: "LinkedIn URL",
              value: data?.linkedIn || "Not provided",
              inline: true,
            },
            {
              name: "Why should you be hired for this role?",
              value: data?.hiringReason,
              inline: false,
            },
    
            {
              name: "When can you start working?",
              value: data?.joiningIn,
              inline: false,
            },
            {
              name: "Where did you learn of this opening?",
              value: data?.hearAboutUs,
              inline: false,
            },
          ],
        },
      ],
    };
    if(res?.data?.webhook){
      return await axios.post(res?.data?.webhook,embed);
    }
  } catch (error) {
    console.log(error)
  }
};

export const sendClientDetails = async (data: any) => {
 try {
  const res:any =await  axios.get("api/webhook",{
    headers:{
      projectRequest:"projectRequest"
    }
  });
  const embed = {
    embeds: [
      {
        title: "Client request",
        description: `${data.fName} is requested for project`,
        color: 3447003,
        author: {
          name: data?.fName,
        },
        fields: [
          {
            name: "First Name",
            value: data?.fName,
            inline: true,
          },
          {
            name: "Last Name",
            value: data?.lName,
            inline: true,
          },
          {
            name: "Email",
            value: data?.email,
            inline: true,
          },
          {
            name: "Mobile Number",
            value: data?.mobile,
            inline: true,
          },
          {
            name: "Company Name",
            value: data?.company || "Not Provided",
            inline: true,
          },
          {
            name: "Role",
            value: data?.role || "Not Provided",
            inline: true,
          },
          {
            name: "Technologies",
            value: data?.technologies.toString(),
            inline: true,
          },
          {
            name: "About Project",
            value: data?.aboutProject || "None",
            inline: true,
          },
          {
            name: "Client Budget",
            value: data?.budget || "None",
            inline: true,
          },
          {
            name: "Timeline of Project",
            value: data?.timeline,
            inline: true,
          },
          {
            name: "Pricing Plan",
            value: data?.pricingPlan,
            inline: true,
          },
        ],
      },
    ],
  };
  if(res?.data?.webhook){
    return await axios.post(res?.data?.webhook,embed);
  }
 } catch (error) {
  console.log(error);
 }
};

export const sendCollaboratorDetails = async (data: any) => {
try {
  const res:any =await  axios.get("api/webhook",{
    headers:{
      collaborate:"collaborate"
    }
  });
  const embed = {
    embeds: [
      {
        title: "Collaboration request",
        description: `${data?.name} wants to collaborate with us.`,
        color: 3447003,
        author: {
          name: data?.fName,
        },
        fields: [
          {
            name: "Name",
            value: data?.name,
            inline: true,
          },
          {
            name: "Email",
            value: data?.email,
            inline: true,
          },
          {
            name: "Mobile Number",
            value: data?.mobile,
            inline: true,
          },
          {
            name: "Company",
            value: data?.company || "None",
            inline: true,
          },
          {
            name: "Company Size",
            value: data?.companySize || "None",
            inline: true,
          },
          {
            name: "Location",
            value: data?.location,
            inline: true,
          },
          {
            name: "Website URL",
            value: data?.websiteURL,
            inline: true,
          },
          {
            name: "Job Title",
            value: data?.jobTitle,
            inline: true,
          },
          {
            name: "Hear about us",
            value: data?.hearAboutUS,
            inline: true,
          },
          {
            name: "Seeks benefit",
            value: data?.jobTitle,
            inline: false,
          },
          {
            name: "Collaboration will bring to us",
            value: data?.questionTwo,
            inline: false,
          },
        ],
      },
    ],
  };
  if(res?.data?.webhook){
    return await axios.post(res?.data?.webhook,embed);
  }
} catch (error) {
  console.log(error)
}
};

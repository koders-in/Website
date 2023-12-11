import axios from "axios";

export const sendCandidateDetails = async (data) => {
  try {
    const res: any = await axios.get("api/webhook", {
      headers: {
        job: "job",
      },
    });
    const embed = {
      embeds: [
        {
          title: "Download resume",
          description: `${data.fName} is apply for ${data?.title} position`,
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
    if (res?.data?.webhook) {
      return await axios.post(res?.data?.webhook, embed);
    }
  } catch (error) {
    console.log(error);
  }
};

export const sendClientDetails = async (data: any) => {
  try {
    const res =  await axios.post("api/project-webhook",{...data});
     return true;
  } catch (error) {
    console.log(error?.message);
    return false;
  }
};

export const sendCollaboratorDetails = async (data: any) => {
  try {
    const res =   await axios.post("api/collaborator-webhook",{...data});
    return true;
  } catch (error) {
    console.log(error?.message);
    return false;
  }
};

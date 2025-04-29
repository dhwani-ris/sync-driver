function transformData(data){
    const masterData = [];
    const childData = [];
  
    data.forEach((submission)=>{
       masterData.push({
          id:submission.id,
          name: submission.name,
          email: submission.email,
          submitted_at : new Date(submission.submitted_at)
       });
       submission.responses.forEach((res)=>{
          childData.push({
              submission_id: submission.id,
              question: res.question,
              answer: res.answer
          });
       });
    });
  
    return {masterData,childData}
  
  }
  
  module.exports = transformData;
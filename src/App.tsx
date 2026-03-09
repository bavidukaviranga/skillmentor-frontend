import Card from "@/components/Cards";
import type { CardElement } from "@/types";

function App() {
  const cards:CardElement[] = [
    {
      title: "AWS Developer Associate Exam Prep",
      description: "Hi! I'm Michelle. Language lover and tutor of English. I specialize in AWS certification preparation and have helped over 150 students achieve their AWS Developer Associate certification. With my background in cloud computing and software development, I can provide practical insights and real-world examples to help you understand complex concepts. I also offer mock interviews and hands-on coding sessions."
    },
    {
      title: "AWS DevOps Engineering Proffesional Exam Prep",
      description: "Hey there! I'm a Senior DevOps Engineer with experience at Fortune 500 companies. I specialize in CI/CD pipelines, container orchestration with Kubernetes, and cloud-native architectures. I've helped hundreds of engineers transition into DevOps roles and master tools like Docker, Jenkins, and GitLab. My sessions include hands-on infrastructure as code exercises and real-world automation scenarios."
    },
    {
      title: "Microsoft Cybersecurity Architect Expert Certification Exam Prep",
      description: "Hello! I'm a Microsoft-certified Cybersecurity Architect with 10+ years of enterprise security experience. I specialize in Zero Trust architecture, identity management, and cloud security. I've helped over 100 professionals achieve their Microsoft Cybersecurity Architect Expert certification. My sessions cover comprehensive security strategy design, hands-on labs with Microsoft security technologies, and real-world case studies. We'll focus on identity & access, platform protection, security operations, and hybrid cloud security architectures."
    },
    {
      title: "AWS Developer Associate Exam Prep",
      description: "Hi! I'm Michelle. Language lover and tutor of English. I specialize in AWS certification preparation and have helped over 150 students achieve their AWS Developer Associate certification. With my background in cloud computing and software development, I can provide practical insights and real-world examples to help you understand complex concepts. I also offer mock interviews and hands-on coding sessions."
    },
    {
      title: "AWS Developer Associate Exam Prep",
      description: "Hi! I'm Michelle. Language lover and tutor of English. I specialize in AWS certification preparation and have helped over 150 students achieve their AWS Developer Associate certification. With my background in cloud computing and software development, I can provide practical insights and real-world examples to help you understand complex concepts. I also offer mock interviews and hands-on coding sessions."
    },
    {
      title: "AWS Developer Associate Exam Prep",
      description: "Hi! I'm Michelle. Language lover and tutor of English. I specialize in AWS certification preparation and have helped over 150 students achieve their AWS Developer Associate certification. With my background in cloud computing and software development, I can provide practical insights and real-world examples to help you understand complex concepts. I also offer mock interviews and hands-on coding sessions."
    },
  ];

  console.log(cards);

  
  return (
    <div 
      style={{
        display:"flex",
        gap:"2rem",
    }}
    
    >
      {cards.map((card) =>{
          
        return <Card title={card.title} description={card.description}/>;
      
      })}
      
    </div>
  );
}
export default App;

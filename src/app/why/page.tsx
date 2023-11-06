const reasons = [
  {
    title: "Enhanced Efficiency and Streamlined Operations",
    description: `Digital tools automate processes, saving time and reducing the margin for error. From customer relationship management systems to project management software, these tools streamline operations, allowing for better resource allocation and increased productivity. Say goodbye to tedious manual tasks and embrace efficiency through automation.`,
  },
  {
    title: "Wider Reach and Targeted Marketing",
    description: `With a digital presence, your business can reach a global audience. Social media, online advertising, and e-commerce platforms enable targeted marketing, allowing you to connect with your ideal customers. By leveraging data analytics, you can tailor marketing strategies for better engagement and higher conversion rates.`,
  },
  {
    title: "Improved Customer Experience",
    description: `Digitalization allows for seamless customer interactions. From responsive websites to user-friendly mobile apps, providing an easy and enjoyable customer experience is vital. Online customer support, chatbots, and personalized communication help in building stronger relationships with your clientele.  `,
  },
  {
    title: "Data-Driven Decision Making",
    description: `Access to data is a goldmine for businesses. Digital tools provide valuable insights into customer behavior, market trends, and operational performance. Analyzing this data empowers owners to make informed, strategic decisions that can steer the business in the right direction. `,
  },
  {
    title: "Adaptation to Industry Changes",
    description: `Industries are constantly evolving, and digitalization is the key to staying relevant. Adapting to new technologies and market trends positions your business as an industry leader, ensuring it doesn’t get left behind.`,
  },
];

export default function Why() {
  return (
    <div className="max-w-2xl pt-10 flex flex-col gap-6 text-sm ">
      <h1 className=" text-2xl font-medium text-center">Why?</h1>
      <p>
        In today`s rapidly evolving business world, digitalization is no longer an option but a
        necessity. As an owner, embracing digital tools and strategies is crucial for sustained
        growth and profitability. Let`s explore the key reasons why digitalizing your business is a
        game-changer.
      </p>
      <ul className="flex flex-col gap-5 ">
        {reasons.map((reason) => (
          <li key={reason.title}>
            <h5 className=" font-medium text-lg font-mono">{reason.title}</h5>
            <p className="">{reason.description}</p>
          </li>
        ))}
      </ul>
      <p>
        By investing in digitalization, business owners can witness remarkable growth and stay
        competitive in an ever-changing market. Don`t miss the opportunity to revolutionize your
        business and secure its future success.
      </p>
    </div>
  );
}

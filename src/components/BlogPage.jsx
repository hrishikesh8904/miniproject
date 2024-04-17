import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import Navbarcmp from "../Navbarcmp";
import Footer from "../Footer";
function BlogPage(props) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    // Check if user is already signed in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div>
      <Navbarcmp isSignedIn={isSignedIn} active="articles"></Navbarcmp>
      <div className="articles-one">
        <img src="../happypeople.jpg" alt="" />
        <div className="articles-one-1">
          <h1>Soul Reflections</h1>
          <h3>Blogging the Journey to Mental Health</h3>
        </div>
      </div>
      <div className="blog-page-one">
        <div className="blog-page-one-1">
          <h1>{props.script1}</h1>

          <img src={`../${props.img}`} alt="" />
        </div>
      </div>
      <div className="blog-page-two">
        <h3>{props.name}</h3>
      </div>
      <div className="blog-page-three">
        <p>
          Introduction: Navigating the complexities of mental health disorders
          can often feel like traversing a maze without a map. However, with
          knowledge, understanding, and compassion, we can begin to unravel this
          maze and shed light on the various aspects of mental health. In this
          blog, we will embark on a journey to explore the landscape of mental
          health disorders, aiming to provide insights, resources, and support
          for individuals, families, and communities. Understanding Mental
          Health Disorders: Mental health disorders encompass a wide range of
          conditions that affect mood, thinking, and behavior. These disorders
          can manifest in different ways and vary in severity, from mild to
          debilitating. Some common mental health disorders include anxiety
          disorders, depression, bipolar disorder, schizophrenia, and
          post-traumatic stress disorder (PTSD). Each disorder has its own set
          of symptoms, causes, and treatments, and it's important to recognize
          that mental health is complex and multifaceted. Breaking the Stigma:
          One of the biggest challenges in addressing mental health disorders is
          the stigma and misconceptions that surround them. Stigma can lead to
          discrimination, shame, and reluctance to seek help, preventing
          individuals from accessing the support and treatment they need. It's
          crucial to challenge stigma by promoting awareness, education, and
          open conversations about mental health. By breaking down barriers and
          fostering acceptance and understanding, we can create a more
          supportive and inclusive environment for those affected by mental
          health disorders. Signs and Symptoms: Recognizing the signs and
          symptoms of mental health disorders is essential for early
          intervention and treatment. Symptoms can vary widely depending on the
          disorder but may include persistent sadness or anxiety, changes in
          mood or behavior, difficulty concentrating, withdrawal from social
          activities, and thoughts of self-harm or suicide. It's important to
          pay attention to these warning signs and to reach out for help if you
          or someone you know is struggling with their mental health. Seeking
          Help and Support: If you or someone you know is experiencing symptoms
          of a mental health disorder, it's important to seek help from a
          qualified mental health professional. Treatment options may include
          therapy, medication, support groups, and lifestyle changes.
          Additionally, reaching out to trusted friends, family members, or
          support organizations can provide valuable emotional support and
          encouragement. Remember, you are not alone, and there is hope and help
          available. Resources and Support: There are numerous resources and
          support networks available for individuals and families affected by
          mental health disorders. National and local organizations, such as the
          National Alliance on Mental Illness (NAMI), Mental Health America
          (MHA), and the Substance Abuse and Mental Health Services
          Administration (SAMHSA), offer information, helplines, support groups,
          and educational materials. Online platforms and forums can also
          provide a sense of community and connection for those seeking support
          and understanding. Conclusion: Navigating the maze of mental health
          disorders requires empathy, awareness, and a commitment to breaking
          down barriers. By understanding the complexities of mental health,
          challenging stigma, recognizing the signs and symptoms, and seeking
          help and support, we can create a more compassionate and supportive
          society for all. Let's continue to shine a light on mental health and
          work together to navigate this maze with empathy and understanding.
        </p>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default BlogPage;

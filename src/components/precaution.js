import React from 'react';
    function Precaution(props) {
        return (
        <div style={{color:'#fff',textAlign: 'left'}}>
          <meta charSet="UTF-8" />
          <title>Precaution</title>
          <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Arimo" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Hind:300" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel="stylesheet" type="text/css" />
          <link rel="stylesheet" href="{{ url_for('static', filename='css/style.css') }}" />
          <style dangerouslySetInnerHTML={{__html: "\nhtml {\n  scroll-behavior: smooth;\n}\nbody {\noverflow:auto;\n}\n" }} />
          <b />
          <h1 style={{marginLeft: '30px'}}>Basic protective measures against the new coronavirus</h1>
          <div>
            <ol type="A">
              <li style={{marginLeft: '30px',color:'#E6DDDB'}}> <p style={{textAlign: 'left',color:'#E6DDDB'}}><strong>Wash your hands frequently </strong></p></li>
              <p style={{textAlign: 'left', fontSize: '15px',color:'#B0A8A6'}}>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.
                <br />Why? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.</p>
              <li style={{marginLeft: '30px',color:'#E6DDDB'}}> <p style={{textAlign: 'left',color:'#E6DDDB'}}><strong>Maintain social distancing </strong></p></li>
              <p style={{textAlign: 'left', fontSize: '15px',color:'#B0A8A6'}}>Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.
                <br />Why? When someone coughs or sneezes they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person coughing has the disease.
              </p>
              <li style={{marginLeft: '30px',color:'#E6DDDB'}}> <p style={{textAlign: 'left',color:'#E6DDDB'}}><strong>Practice respiratory hygiene</strong></p></li>
              <p style={{textAlign: 'left', fontSize: '15px',color:'#B0A8A6'}}>Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately.
                <br />Why? Droplets spread virus. By following good respiratory hygiene you protect the people around you from viruses such as cold, flu and COVID-19.
              </p>
              <li style={{marginLeft: '30px',color:'#E6DDDB'}}> <p style={{textAlign: 'left',color:'#E6DDDB'}}><strong>If you have fever, cough and difficulty breathing, seek medical care</strong></p></li>
              <p style={{textAlign: 'left', fontSize: '15px',color:'#B0A8A6'}}>Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.
                <br />Why? National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections.
              </p>
              <li style={{marginLeft: '30px',color:'#E6DDDB'}}> <p style={{textAlign: 'left',color:'#E6DDDB'}}><strong>Stay informed and follow advice given by your healthcare provider</strong></p></li>
              <p style={{textAlign: 'left', fontSize: '15px',color:'#B0A8A6'}}>Stay informed on the latest developments about COVID-19. Follow advice given by your healthcare provider, your national and local public health authority or your employer on <br />how to protect yourself and others from COVID-19.
                <br />Why? National and local authorities will have the most up to date information on whether COVID-19 is spreading in<br /> your area. They are best placed to advise on what people in your area should be doing to protect themselves.
              </p>
            </ol>
          </div>
          <h1 style={{marginLeft: '30px'}}>Protection measures for persons who are in or have recently visited (past 14 days) areas where COVID-19 is spreading</h1>
          <div>
            <ul>
              <li style={{marginLeft: '30px',color:'#E6DDDB'}}> <p style={{textAlign: 'left',color:'#B0A8A6'}}>Follow the guidance outlined above.</p></li>
              <li style={{marginLeft: '30px',color:'#E6DDDB'}}> <p style={{textAlign: 'left',color:'#B0A8A6'}}>Stay at home if you begin to feel unwell, even with mild symptoms such as headache and slight runny nose, until you recover. <b>Why?</b> Avoiding contact with others and visits to medical facilities will allow these facilities to operate more effectively and help protect you and others from possible COVID-19 and other viruses.</p></li>
              <li style={{marginLeft: '30px',color:'#E6DDDB'}}> <p style={{textAlign: 'left',color:'#B0A8A6'}}>If you develop fever, cough and difficulty breathing, seek medical advice promptly as this may be due to a respiratory infection or other serious condition. Call in advance and tell your provider of any recent travel or contact with travelers. <b>Why?</b> Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also help to prevent possible spread of COVID-19 and other viruses.</p></li>
            </ul>
          </div>
        </div>
      );
    }
  export default Precaution;
  
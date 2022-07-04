import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-ruby';
import 'prismjs/themes/prism-okaidia.css'; //Example style, you can use another

const CodeInvitation = () => {
  const [code, setCode] = React.useState(
    `
require 'family'
require 'friends'

erika = Bride.new
mirko = Groom.new

class Wedding < ActiveEngagement::Base

  def invite
    puts <<-INVITE
        Mr & Mrs Terrazas and Mr & Mrs Vargas invite you to
        the Wedding of their son and dauther
            Mirko Jhovanny Terrazas Vargas
                  and
            Erika Rosaed Vargas Navarro
        On the 24th of September 2022
        At the xxxx xxxx, Leeds
----------------------------------------------------------
                               _      Mirko y Erika
         ___            {@}  _|=|_
        /___\\          /(")\\  (")
     .---'-'---.      /((~))\\/<x>\\        _   .-.
    /___________\\     ~~/@\\~~\\|_|/       <v> ((_))
     | A /^\\ A |       /   \\  |||       ((_)) '-'
     |   |"|   |      /~@~@~\\ |||        '-'
 ____|___|_|___|_____/_______\\|||___October 25th 2013___
        Ceremony Commences at 13:00 pm
          Followed by a
        Wedding & Evening Reception
    INVITE

    if self.internet_access?
        redirect_to 'http://heatheranddom.com/rsvp'
      else
        rsvp_to 'Mr + Mrs Burke, Address Here'
    end
  end

  def ceremony
    begin
      Ceremony.start
      erika.kissed_by(mirko)
      Ceremony.sign_register(erika, mirko)
      erika.surname! = "Vargas"
      throw :bouquet
      Ceremony.end
    rescue AnyLawfulImpediment
      # This should never happen!
    end
  end
end
  `
  );

  return <div>
    <CodeEditor
      value={code}
      language="ruby"
      placeholder="Please enter JS code."
      padding={20}
      style={{
        position: 'initial',
        fontSize: 20,
        backgroundColor: "#f5f5f5",
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
    />
  </div>
}

export default CodeInvitation;
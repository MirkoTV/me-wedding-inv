import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-ruby';
import 'prismjs/themes/prism-okaidia.css'; //Example style, you can use another

const CodeInvitation = () => {
  const [code] = React.useState(
    `
require 'family'
require 'friends'

erika = Bride.new
mirko = Groom.new

TEMPLO_CALA_CALA_LOCATION = 'https://goo.gl/maps/Yh2VeDCihbYLkWdE8'
SALON_LA_TERRAZA_LOCATION = 'https://goo.gl/maps/RdySP3MADXkjn9h28'

class Wedding < ActiveEngagement::Base
  def invite
    puts <<-INVITE
        Mr & Mrs Terrazas and Mr & Mrs Vargas invite you to
        the Wedding of their son and dauther
            Mirko Jhovanny Terrazas Vargas
                  and
            Erika Rosaed Vargas Navarro
        On the 24th of September 2022
----------------------------------------------------------
                                 _      Mirko y Erika
          ___             {@}  _|=|_
         /___\\           /(")\\  (")
      .---'-'---.       /((~))\\/<x>\\        _   .-.
     /___________\\      ~~/@\\~~\\|_|/       <v> ((_))
      | A /^\\ A |        /   \\  |||       ((_)) '-'
      |   |"|   |       /~@~@~\\ |||        '-'
  ____|___|_|___|______/_______\\|||___September 24th 2022___
        Ceremony Commences at 13:00 pm
          Followed by a
        Wedding & Reception
    INVITE
  end

  def ceremony
    begin
      Ceremony.start

      religious_wedding(
        DateTime.new(2022, 09, 24, 13, 00, 00), TEMPLO_CALA_CALA_LOCATION)
      reception(
        DateTime.new(2022, 09, 24, 15, 00, 00), SALON_LA_TERRAZA_LOCATION)
      dinner(
        DateTime.new(2022, 09, 24, 18, 30, 00))

      party!

      eat_cake(
        DateTime.new(2022, 09, 24, 22, 30, 00))

      Ceremony.end
    rescue AnyLawfulImpediment
      # This should never happen!
    end
  end

  private

  def religious_wedding(date, location)
    Logger.log('Starting religious wedding at ', date)
    Ceremony.move_to(location)

    return unless erika.say_yes?

    Ceremony.sign_register(erika, mirko)
    erika.surname += "de Terrazas" if erika.happy?

    erika.kissed_by(mirko)
  end

  def reception(date, locaiton)
    Logger.log('Receiving friends and family ', date)
    Ceremony.move_to(location)
  end

  def party!
    begin
      throw :bouquet
    rescue
      Ceremony.next!
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
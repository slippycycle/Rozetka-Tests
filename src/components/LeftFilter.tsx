import React from 'react'
import { RangePriceContext } from '../context'
import { fetchBrands, setAvailableBrands } from '../store/features/Brands.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/LeftFilter.module.scss'
import BrandsCheckList from './BrandsCheckList'
import BrandsCheckListContainer from './BrandsCheckListContainer'
import RangeContainer from './RangeContainer'
import RangeSlider from './RangeSlider'



export default React.memo(function LeftFilter({}) {






  return (
    <div className={c.container}>
      <BrandsCheckListContainer />
      <RangeContainer />  
      <p>
        daw

        awd
        awdwa
        dwa
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:

“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.

The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.

Origins and Discovery
Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero's 1st-century BC text De Finibus Bonorum et Malorum.

Engraving of Marcus Tullius Cicero
CICERO
HEDONIST ROOTS
Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”

As Cicero would put it, “Um, not so fast.”

The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.

Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.

In particular, the garbled words of lorem ipsum bear an unmistakable resemblance to sections 1.10.32–33 of Cicero's work, with the most notable passage excerpted below:

“Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.”
A 1914 English translation by Harris Rackham reads:

“Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.”
McClintock's eye for detail certainly helped narrow the whereabouts of lorem ipsum's origin, however, the “how and when” still remain something of a mystery, with competing theories and timelines.

Fuzzy Beginnings
Creation timelines for the standard lorem ipsum passage vary, with some citing the 15th century and others the 20th.

Typesetter selecting type for a galley
TYPESETTER SELECTING TYPE
REMIXING A CLASSIC
So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.

It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries.

And anyways, as Cecil Adams reasoned, “[Do you really] think graphic arts supply houses were hiring classics scholars in the 1960s?” Perhaps. But it seems reasonable to imagine that there was a version in use far before the age of Letraset.

McClintock wrote to Before & After to explain his discovery;

“What I find remarkable is that this text has been the industry's standard dummy text ever since some printer in the 1500s took a galley of type and scrambled it to make a type specimen book; it has survived not only four centuries of letter-by-letter resetting but even the leap into electronic typesetting, essentially unchanged except for an occasional 'ing' or 'y' thrown in. It's ironic that when the then-understood Latin was scrambled, it became as incomprehensible as Greek; the phrase 'it's Greek to me' and 'greeking' have common semantic roots!” (The editors published his letter in a correction headlined “Lorem Oopsum”).
As an alternative theory, (and because Latin scholars do this sort of thing) someone tracked down a 1914 Latin edition of De Finibus which challenges McClintock's 15th century claims and suggests that the dawn of lorem ipsum was as recent as the 20th century. The 1914 Loeb Classical Library Edition ran out of room on page 34 for the Latin phrase “dolorem ipsum” (sorrow in itself). Thus, the truncated phrase leaves one page dangling with “do-”, while another begins with the now ubiquitous “lorem ipsum”.

Whether a medieval typesetter chose to garble a well-known (but non-Biblical—that would have been sacrilegious) text, or whether a quirk in the 1914 Loeb Edition inspired a graphic designer, it's admittedly an odd way for Cicero to sail into the 21st century.

Meaning of Lorem Ipsum
Lorem ipsum was purposefully designed to have no meaning, but appear like real text, making it the perfect placeholder.

Letraset Transfer Sheets with Lorem Ipsum
LETRASET TRANSFER SHEETS
INTERPRETING NONSENSE

        <br>
        
        </br>


        addwadwad
        wad
      </p>
    </div>
  )
});

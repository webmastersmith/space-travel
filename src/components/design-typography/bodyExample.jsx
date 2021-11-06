import { memo, useState, useEffect, useCallback, useMemo } from 'react'

export default memo(function BodyExample(props) {
  return (
    <div class="flow" style="flex-basis: 100%; --flow-space: 4rem;">
      <div>
        <p class="text-accent">Subheading 1 - Bellefair Regular - 28px</p>
        <p class="fs-500 ff-serif uppercase">384,400 km</p>
      </div>
      <div>
        <p class="text-accent">
          Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character Space
        </p>
        <p class="fs-200 uppercase ff-sans-cond letter-spacing-3">
          Avg. Distance
        </p>
      </div>
      <div>
        <p class="text-accent">
          Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
        </p>
        <p class="fs-300 uppercase ff-sans-cond letter-spacing-2">Europa</p>
      </div>
      <div>
        <p class="text-accent">Body Text</p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
          vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
          laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor
          eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum
          dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.
          Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
          dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet
          viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.
          Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit
          amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque
          aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis
          vel, nisi.{' '}
        </p>
      </div>
    </div>
  )
})

import * as React from 'react'
import { x } from '@xstyled/styled-components'

import { NormalLayout } from '@layouts'
import { Image } from '@atoms'

function Button(props) {
  return <x.button w={20} h={20} bg="blue-500" {...props} />
}

const IndexPage = () => {
  return (
    <NormalLayout>
      <x.div
        display="flex"
        flexDirection="column"
        justifyItems="center"
        alignItems="center"
        w="100vw"
        h="100vh"
        mt={96}
      >
        <h1>Home Page</h1>
        <Button>Hello</Button>
      </x.div>
    </NormalLayout>
  )
}

export default IndexPage

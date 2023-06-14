import * as React from 'react'
import { BiChevronDown, BiGitBranch, BiLinkExternal } from 'react-icons/bi'
import { useBranchData } from './BranchData'
import { BranchModal } from './BranchModal'
import { Button } from '../../packages/styles'
import { useWindowWidth } from '@react-hook/window-size'

// trim 'tina/' prefix from branch name
const trimPrefix = (branchName: string) => {
  return branchName.replace(/^tina\//, '')
}

export const BranchBanner = () => {
  const [open, setOpen] = React.useState(false)
  const openModal = () => setOpen(true)
  const { currentBranch } = useBranchData()

  const navBreakpoint = 1000
  const windowWidth = useWindowWidth()
  const renderNavToggle = windowWidth < navBreakpoint + 1

  return (
    <>
      <div
        className={`w-full bg-white flex items-center gap-2 -mb-px border-b border-gray-100 py-3 pr-4 ${
          renderNavToggle ? 'pl-20' : 'pl-4'
        }`}
      >
        <Button variant="white" size="small" onClick={openModal}>
          <BiGitBranch className="flex-shrink-0 w-4 h-auto text-blue-500/70 mr-1" />
          <span className="truncate max-w-full">
            {trimPrefix(currentBranch)}
          </span>
          <BiChevronDown
            className="-mr-1 h-4 w-4 opacity-70 shrink-0"
            aria-hidden="true"
          />
        </Button>
        <Button variant="white" size="small" onClick={() => {}}>
          <BiLinkExternal className="flex-shrink-0 w-4 h-auto text-blue-500/70 mr-1" />
          Preview
        </Button>
      </div>
      {open && (
        <BranchModal
          close={() => {
            setOpen(false)
          }}
        />
      )}
    </>
  )
}

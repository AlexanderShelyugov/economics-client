import {
    Paper, Table, TableBody, TableContainer, TableHead, TablePagination
} from '@material-ui/core'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PageableTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 0,
            rowsPerPage: 5
        }
    }

    setPage(page) {
        this.setState(() => ({ page }))
    }

    setRowsPerPage(rowsPerPage) {
        this.setState(() => ({ rowsPerPage }))
        this.setPage(0)
    }

    render() {
        const { colspan, count, headerMapper, valuesMapper } = this.props
        const { page, rowsPerPage } = this.state
        const onChangePage = (e, page) => {
            this.setPage(page)
        }
        const onChangeRowsPerPage = (e) => {
            this.setRowsPerPage(parseInt(e.target.value, 10))
            this.setPage(0)
        }

        return (
            <Paper>
                <TableContainer>
                    <Table>
                        <TableHead>
                            {headerMapper()}
                        </TableHead>
                        <TableBody>
                            {valuesMapper(page, rowsPerPage)}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    colspan={colspan}
                    count={count()}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={onChangePage}
                    onChangeRowsPerPage={onChangeRowsPerPage}
                />
            </Paper>
        )
    }
}

const { func, number } = PropTypes

PageableTable.propTypes = {
    colspan: number,
    count: func.isRequired,
    headerMapper: func.isRequired,
    valuesMapper: func.isRequired
}

export default PageableTable
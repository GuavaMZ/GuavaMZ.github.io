/**
 * docType (js)
 */

'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const dt_doctype_table = document.querySelector('.invoice-list-table');

    if (dt_doctype_table) {
        const dt_doctype = new DataTable(dt_doctype_table, {
            ajax: assetsPath + 'json/invoice-list.json',
            columns: [
                { data: 'invoice_id' },
                { data: 'invoice_id', orderable: false, render: DataTable.render.select() },
                { data: 'invoice_id' },
                { data: 'client_name' },
                { data: 'client_name' },
                { data: 'issued_date' },
            ],
            columnDefs: [
                {
                    className: 'control',
                    responsivePriority: 2,
                    searchable: false,
                    targets: 0,
                    render: function () {
                        return '';
                    }
                },
                {

                    targets: 1,
                    orderable: false,
                    searchable: false,
                    responsivePriority: 4,
                    render: function () {
                        return '<input type="checkbox" class="dt-checkboxes form-check-input">';
                    }

                },
                {
                    targets: 2,
                    render: function (data, type, full) {
                        return `<a href="app-invoice-preview.html">#${full['invoice_id']}</a>`;
                    }
                },
                {
                    targets: 3,
                    render: function (data, type, full) {
                        const clientName = full['client_name'];
                        return `
                        <div class="d-flex justify-content-start align-items-center">
                          <div class="d-flex flex-column">
                            <a href="pages-profile-user.html" class="text-heading text-truncate"><span class="fw-medium">${clientName}</span></a>
                          </div>
                        </div>
                      `;;
                    }
                },
                {
                    targets: 4,
                    render: function (data, type, full) {
                        const clientName = full['client_name'];
                        return `
                        <div class="d-flex justify-content-start align-items-center">
                          <div class="d-flex flex-column">
                            <a href="pages-profile-user.html" class="text-heading text-truncate"><span class="fw-medium">${clientName}</span></a>
                          </div>
                        </div>
                      `;;
                    }
                },
                {
                    targets: 5,
                    render: function (data, type, full) {
                        const issueDate = new Date(full['issued_date']);
                        return `
                          <span class="d-none">${issueDate.toISOString().slice(0, 10).replace(/-/g, '')}</span>
                          ${issueDate.toLocaleDateString('ar', { month: 'short', day: '2-digit',  year: 'numeric' })}
                        `;
                    }
                },
                {
                    targets: 6,
                    // title: 'Actions',
                    searchable: false,
                    orderable: false,
                    render: function () {
                        return (
                            '<div class="d-flex align-items-center">' +
                            '<a href="javascript:;" data-bs-toggle="tooltip" class="btn btn-icon btn-text-secondary rounded-pill waves-effect delete-record" data-bs-placement="top" title="حذف"><i class="icon-base ti tabler-trash icon-22px"></i></a>' +
                            '<a href="app-invoice-preview.html" data-bs-toggle="tooltip" class="btn btn-icon btn-text-secondary rounded-pill waves-effect" data-bs-placement="top" title="عرض"><i class="icon-base ti tabler-eye icon-22px"></i></a>' +
                            '<div class="dropdown">' +
                            '<a href="javascript:;" class="btn dropdown-toggle hide-arrow btn-icon btn-text-secondary rounded-pill waves-effect p-0" data-bs-toggle="dropdown"><i class="icon-base ti tabler-dots-vertical icon-22px"></i></a>' +
                            '<div class="dropdown-menu dropdown-menu-end">' +
                            '<a href="javascript:;" class="dropdown-item">Download</a>' +
                            '<a href="app-invoice-edit.html" class="dropdown-item">Edit</a>' +
                            '<a href="javascript:;" class="dropdown-item">Duplicate</a>' +
                            '</div>' +
                            '</div>'
                        );
                    }
                }
            ],
            layout: {
                topStart: {
                    rowClass: 'row m-3 my-0 justify-content-between',
                    features: [
                      {
                        pageLength: {
                          menu: [10, 25, 50, 100],
                          text: 'اظهار عدد نتائج لكل صفحة_MENU_'
                        },
                        buttons: [
                          {
                            text: '<i class="icon-base ti tabler-plus icon-16px me-md-2"></i><span class="d-md-inline-block d-none">اضافة</span>',
                            className: 'btn btn-primary',
                            action: function () {
                              window.location = 'app-invoice-add.html';
                            }
                          }
                        ]
                      }
                    ]
                  },
                  topEnd: {
                    rowClass: 'row m-3 my-0 justify-content-between',
                    features: [
                      {
                        search: {
                          placeholder: 'بحث بالاسم او بالرقم',
                          text: '_INPUT_'
                        }
                      }
                    ]
                  },
                  bottomStart: {
                    rowClass: 'row mx-3 justify-content-between',
                    features: ['info']
                  },
                  bottomEnd: 'paging',
                
            },
            language: {
                paginate: {
                  next: '<i class="icon-base ti tabler-chevron-right scaleX-n1-rtl icon-18px"></i>',
                  previous: '<i class="icon-base ti tabler-chevron-left scaleX-n1-rtl icon-18px"></i>',
                  first: '<i class="icon-base ti tabler-chevrons-left scaleX-n1-rtl icon-18px"></i>',
                  last: '<i class="icon-base ti tabler-chevrons-right scaleX-n1-rtl icon-18px"></i>'
                }
              },
              responsive: {
                details: {
                  display: DataTable.Responsive.display.modal({
                    header: function (row) {
                      const data = row.data();
                      return 'Details of ' + data['client_name'];
                    }
                  }),
                  type: 'column',
                  renderer: function (api, rowIdx, columns) {
                    const data = columns
                      .map(function (col) {
                        return col.title !== '' // ? Do not show row in modal popup if title is blank (for check box)
                          ? `<tr data-dt-row="${col.rowIndex}" data-dt-column="${col.columnIndex}">
                              <td>${col.title}:</td>
                              <td>${col.data}</td>
                            </tr>`
                          : '';
                      })
                      .join('');
        
                    if (data) {
                      const div = document.createElement('div');
                      div.classList.add('table-responsive');
                      const table = document.createElement('table');
                      div.appendChild(table);
                      table.classList.add('table');
                      const tbody = document.createElement('tbody');
                      tbody.innerHTML = data;
                      table.appendChild(tbody);
                      return div;
                    }
                    return false;
                  }
                }
              },
        })
    }
});